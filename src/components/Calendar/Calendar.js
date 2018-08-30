import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import uuidV4 from 'uuid/v4';
import { minTime, maxTime, calendarInitialState } from '../../constants';
import BigCalendar from 'react-big-calendar';
import Dialog from 'material-ui/Dialog';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Footer from './Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
//Actions

//Styles
import './styles/dragAndDrop/styles.css';
import './styles/less/styles.css';
import './styles/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const DragAndDropCalendar = withDragAndDrop(BigCalendar, { backend: false });

class Dnd extends Component {
  constructor(props) {
    super(props);

    this.state = calendarInitialState;

    this.moveEvent = this.moveEvent.bind(this);
  }

  componentDidMount() {
    const newEvents = [];
    const newRecipes = [];
  }
  moveEvent({ event, start, end }) {
    const { events } = this.state;
    const idx = events.indexOf(event);
    let updatedEvent = { ...event, start, end };
    const nextEvents = [...events];

    if (idx > -1) {
      nextEvents.splice(idx, 1, updatedEvent);
      this.setState({
        events: nextEvents
      });
    } else {
      const newEventId = uuidV4();
      updatedEvent = {
        ...updatedEvent,
        id: newEventId,
        ownerId: this.props.uid
      };
      console.log(updatedEvent);
      nextEvents.push(updatedEvent);

      this.setState({
        events: nextEvents
      });
    }
  }

  selectEvent = event => {
    this.handleOpen(event);
  };

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };

  createRecipes = ({ name, desc, phone }) => {
    const { recipes } = this.state;
    const newRecipesId = uuidV4();
    const updatedRecipes = {
      ...this.state.modal,
      id: newRecipesId,
      ownerId: this.props.uid,
      name,
      desc,
      phone
    };
    const nextRecipes = [...recipes];
    nextRecipes.push(updatedRecipes);

    this.setState({
      recipes: nextRecipes
    });
  };
  editEvent = ({ id, name, desc }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === id
        ? { ...existingEvent, name, desc }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };

  editRecipes = ({ id, name, desc, phone }) => {
    const { recipes } = this.state;

    const nextRecipes = recipes.map(existingRecipes => {
      return existingRecipes.id === id
        ? { ...existingRecipes, name, desc }
        : existingRecipes;
    });

    this.setState({
      recipes: nextRecipes
    });
  };
  deleteEvent = ({ id }) => {
    const { events } = this.state;

    const nextEvents = events.filter(existingEvent => {
      return existingEvent.id !== id;
    });

    this.setState({
      events: nextEvents
    });
  };

  deleteRecipes = ({ id }) => {
    const { recipes } = this.state;

    const nextRecipes = recipes.filter(existingRecipes => {
      return existingRecipes.id !== id;
    });

    this.setState({
      recipes: nextRecipes
    });
  };
  handleClose = () => {
    this.setState({
      modalOpen: false,
      recipesOpen: false,
      modal: calendarInitialState.modal
    });
  };
  handleOpen = event => {
    this.setState({
      modalOpen: true,
      modal: event
    });
  };

  handleRecipes = event => {
    this.setState({
      modal: event ? event : { ...this.state.modal, phone: null },
      recipesOpen: true
    });
  };

  render() {
    if (this.state.events) {
      return (
        <div className={'row'}>
          <div style={{ height: 500 }} className={'col-8'}>
            <DragAndDropCalendar
              events={this.state.events}
              onEventDrop={this.moveEvent}
              resizable
              onEventResize={this.resizeEvent}
              defaultView="week"
              defaultDate={new Date()}
              onSelectEvent={this.selectEvent}
              min={minTime}
              max={maxTime}
            />
            <Dialog
              title="Recipe"
              modal={false}
              open={this.state.modalOpen}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              <Modal
                event={this.state.modal}
                onRequestClose={this.handleClose}
                onEditEvent={this.editEvent}
                onDeleteEvent={this.deleteEvent}
              />
            </Dialog>

            <Dialog
              title="Recipe"
              modal={false}
              open={this.state.recipesOpen}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              <Modal
                event={this.state.modal}
                onRequestClose={this.handleClose}
                onCreatEvent={this.createRecipes}
                onEditEvent={this.editRecipes}
                onDeleteEvent={this.deleteRecipes}
              />
            </Dialog>
          </div>
          <div className={'col-2'}>
            Recipes:
            <div>
              <FloatingActionButton
                mini={true}
                className={'m-2'}
                onClick={() => this.handleRecipes()}
              >
                <ContentAdd />
              </FloatingActionButton>
            </div>
            <Sidebar
              events={this.state.recipes}
              onClickEvent={this.handleRecipes}
            />
          </div>
          <Footer selectedEvents={this.state.events} />
        </div>
      );
    }
  }
}

export default DragDropContext(HTML5Backend)(Dnd);
