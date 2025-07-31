import React, { useState } from 'react';

export default function NotesApp() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'My Notes 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      title: 'My Notes 2',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]);
  
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const addNote = () => {
    if (noteTitle.trim() === '' && noteContent.trim() === '') return;
    
    const newNote = {
      id: Date.now(),
      title: noteTitle.trim() || `Note ${notes.length + 1}`,
      content: noteContent.trim()
    };
    
    setNotes([...notes, newNote]);
    setNoteTitle('');
    setNoteContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="text-center py-6 border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800">My Notes App</h1>
      </div>

      {/* Add Note Form */}
      <div className="p-4 space-y-3">
        <input
          type="text"
          placeholder="Note title..."
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
        />
        
        <textarea
          placeholder="Add a new note..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none text-sm"
        />
        
        <button
          onClick={addNote}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="px-4 pb-4 space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="bg-gray-50 rounded-lg p-4 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-800 text-sm pr-2">{note.title}</h3>
              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex-shrink-0"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{note.content}</p>
          </div>
        ))}
        
        {notes.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No notes yet. Add your first note above!</p>
          </div>
        )}
      </div>
    </div>
  );
}