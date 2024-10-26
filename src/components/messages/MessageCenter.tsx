import React, { useState } from 'react';
import { Message, User } from '../../types';
import { Search, Send, Paperclip, Mail } from 'lucide-react';

interface MessageCenterProps {
  messages: Message[];
  currentUser: User;
  onSendMessage: (message: Omit<Message, 'id' | 'timestamp' | 'read'>) => void;
}

export default function MessageCenter({ messages, currentUser, onSendMessage }: MessageCenterProps) {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [newMessage, setNewMessage] = useState({
    recipientId: '',
    subject: '',
    content: '',
  });

  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-10rem)]">
      {/* Message List */}
      <div className="col-span-4 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                !message.read ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  !message.read ? 'bg-indigo-100' : 'bg-gray-100'
                }`}>
                  <Mail className={`w-4 h-4 ${
                    !message.read ? 'text-indigo-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.content}
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Content */}
      <div className="col-span-8 bg-white rounded-xl shadow-sm overflow-hidden">
        {selectedMessage ? (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold mb-2">{selectedMessage.subject}</h2>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>From: {selectedMessage.senderId}</span>
                <span>{new Date(selectedMessage.timestamp).toLocaleString()}</span>
              </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <p className="text-gray-800 whitespace-pre-wrap">{selectedMessage.content}</p>
              {selectedMessage.attachments?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Attachments</h3>
                  <div className="space-y-2">
                    {selectedMessage.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.url}
                        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        <Paperclip className="w-4 h-4" />
                        {attachment.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your reply..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="btn btn-primary flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a message to read</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}