import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Users from './components/Users.jsx';
import Welcome from './components/Welcome.jsx';
import Takeaways from './components/Takeaways.jsx';
import ModalView from './components/ModalView.jsx';
import Topics from './components/Topics.jsx';
import Nav from './components/Nav.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      topics: [],
      session: {},
      showModal: false,
      inviteSubmitted: false,
      takeaways : [],
      displayMode : 'takeaways'
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.post = this.post.bind(this);
    this.displayTopics = this.displayTopics.bind(this);
    this.createTakeaway = this.createTakeaway.bind(this)
    this.displayTakeaways = this.displayTakeaways.bind(this);
    this.gitHubSignIn = this.gitHubSignIn.bind(this);
  }

  hitServer(url, data, method = 'GET', dataType = 'json') {
    return $.ajax({
      url: url,
      method: method,
      contentType: method === 'POST' ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8',
      data: JSON.stringify(data),
      dataType: method === 'POST' ? 'html' : dataType
    })
  }

  gitHubSignIn() {
    let clientId = '0e43b859aea47726fa84';
    let scopes = 'user';
    window.open(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scopes}`, '_self');
  }

  getUserSession() {  // get a user if they have a session
    this.hitServer('/session')
      .then(userObj => {
        if(userObj.user.length) {
          this.setState({
            session: userObj.user[0]
          });
        }
      })
      .catch(err => {
        console.error('we have an error ', err);
      });
  }

  displayUsers() {
    this.hitServer('/users')
    .then(users => {// expect users to be an array of user objects
        console.log('these are the results ', users);
        this.setState({
          users: users
        });
      })
    .catch(err => {
      console.error('we have an error ', err);
    });
  }

  createTakeaway() {
    let data = {id : 'null',
      topic : 'Why do tests suck so much?',
      date : '1997-12-25 12:31:56',
      takeaway : 'We should have practiced writing Mocha tests...',
      user_id : 2, 
      user_A_id: 1,
      };

    this.hitServer('/takeaways', data, 'POST')
      .then(results => {
        console.log('NEW TAKEAWAY RETURNED = ', data);
        this.displayTakeaways();
      })
      .catch(err => {
        console.error('ERROR RETRIEVING TAKEAWAYS: ', err);
      });
  }

  displayTakeaways() {
    this.hitServer('/takeaways')
    .then(takeaways => { // expect takeaways to be an array of takeaway objects
      console.log('TAKEAWAYS RETURNED FROM SERVER = ', takeaways);
      this.setState({ // INVOKING setState HERE AUTO-FORCES AN INVOCATION OF THE 'render' METHOD
        takeaways : takeaways,
        displayMode : 'takeaways'
      });
    })
    .catch(err => {
      console.error('ERROR RETRIEVING TAKEAWAYS: ', err);
    });
  }

  displayTopics() {
    this.setState({
      displayMode: 'topics'
    })
  }

  componentWillMount() { // A lifecycle event that each component has (before render)
  }

  componentDidMount() { // A lifecycle event that each component has (after render)
    // Render has already occurred; Get users from database.
    this.getUserSession();
    this.display('/users');
    this.display('/topics')
  }

  showModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({
      showModal: false,
      inviteSubmitted: false
    });
  }

  post(event) { // post a topic
    event.preventDefault();
    let topic = event.currentTarget.form.firstChild.value;
    if(!topic.length) {
      alert("Did you forget something?_O");
      return;
    }

    // figure out sanitation
    this.hitServer('/topics', {topic}, 'POST')
      .then(() => {
        this.setState({inviteSubmitted: true});
        this.display('/topics');
      })
      .catch(err => {
        console.log('Error posting a topic ', err);
      });
  }

  display(path) {
    this.hitServer(path)
      .then(stateObj => { // expect stateObj to be {property: value}
        this.setState(stateObj);
      })
      .catch(err => {
        console.error('error displaying state: ', err);
      });
  }

  render () {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout">
          <header className="layout-transparent mdl-layout__header mdl-layout__header--waterfall">
              <Nav nav={this}/>
          </header>
          <div className="mdl-layout__drawer">
            <Nav nav={this}/>
          </div>
          <main className="mdl-layout__content">
            <div className="mdl-grid">
            <ModalView
              show={this.state.showModal}
              closeMethod={this.closeModal}
              post={this.post}
              submitted={this.state.inviteSubmitted} />
              {Object.keys(this.state.session).length > 0 &&
                <Welcome session={this.state.session} /> }

                {(this.state.topics.length > 0 && this.state.displayMode === 'topics')
                && <Topics topics={this.state.topics} /> }

                {(this.state.takeaways.length > 0 && this.state.displayMode === 'takeaways')
                && <Takeaways takeaways={this.state.takeaways} createTakeaway={this.createTakeaway} />}

                <Users users={this.state.users}  />
            </div>
          </main>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
