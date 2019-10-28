import React from 'react';
import { Card, Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editNote, removeNote, updateNote } from '../actions/notes';

const icons = {
  high: { icon: 'alarm', color: 'red' },
  normal: { icon: 'bookmark outline', color: 'blue' },
  low: { icon: 'circle outline', color: undefined }
};

const NoteListItem = props => (
  <Card className={props.status ? 'noteDone' : 'noteOpen'}>
    <Card.Content header={props.title} style={{ flexGrow: 0 }} />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Dropdown
        icon='ellipsis horizontal'
        direction='left'
        title='Menu'
        style={{ float: 'right' }}
      >
        <Dropdown.Menu>
          <Dropdown.Item
            icon='check'
            text='Mark as done'
            onClick={() => props.updateNote(props.id, { status: 1 })}
          />
          <Dropdown.Item
            icon='edit'
            text='Edit note'
            onClick={() => props.editNote(props.id)}
          />
          <Dropdown.Item
            icon='trash'
            text='Remove note'
            onClick={() => props.removeNote(props.id)}
          />
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <Icon
          color={icons[props.priority].color}
          name={icons[props.priority].icon}
          title={props.priority + ' priority'}
          style={{ cursor: 'help' }}
        />
      </div>
    </Card.Content>
  </Card>
);

const mapDispatchToProps = dispatch => ({
  editNote: id => dispatch(editNote(id)),
  removeNote: id => dispatch(removeNote(id)),
  updateNote: (id, updates) => dispatch(updateNote(id, updates))
});

export default connect(
  undefined,
  mapDispatchToProps
)(NoteListItem);
