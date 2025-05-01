
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Calendar, Image, Users, Video, Bell, Send, Plus, MoreHorizontal } from "lucide-react";

// Mock data for the group
const groupData = {
  id: "1",
  name: "Design Club",
  description: "A community for UI/UX designers to share work, get feedback, and stay up to date with the latest design trends and tools.",
  category: "Design",
  visibility: "public",
  memberCount: 48,
  createdAt: "2023-09-15T12:00:00Z",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  tags: ["design", "ui", "ux", "creative"],
};

// Mock data for posts
const posts = [
  {
    id: "1",
    user: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Just finished my latest UI project! Would love some feedback from the community.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    likes: 24,
    comments: 8,
    createdAt: "2023-10-25T15:30:00Z"
  },
  {
    id: "2",
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Found this interesting article about design systems. Worth a read!",
    link: "https://example.com/design-systems",
    likes: 18,
    comments: 4,
    createdAt: "2023-10-24T12:45:00Z"
  },
  {
    id: "3",
    user: {
      name: "Miguel Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Reminder: We have our monthly design critique session tomorrow at 6pm. Bring your work to share!",
    likes: 32,
    comments: 11,
    createdAt: "2023-10-23T09:15:00Z"
  }
];

// Mock data for events
const events = [
  {
    id: "1",
    title: "Monthly Design Critique",
    date: "2023-11-02T18:00:00Z",
    location: "Online (Zoom)",
    description: "Bring your current design work to share and get feedback from the community.",
    attendees: 15
  },
  {
    id: "2",
    title: "UI/UX Workshop",
    date: "2023-11-10T14:00:00Z",
    location: "Creative Hub, Floor 3",
    description: "Hands-on workshop focused on design systems and component libraries.",
    attendees: 23
  },
  {
    id: "3",
    title: "Design Conference Trip",
    date: "2023-11-18T09:00:00Z",
    location: "Convention Center",
    description: "Group trip to the annual Design Forward conference. Tickets required.",
    attendees: 8
  }
];

// Mock data for members
const members = [
  { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces", role: "Admin" },
  { name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces", role: "Moderator" },
  { name: "Miguel Rodriguez", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces", role: "Member" },
  { name: "Emily Wang", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces", role: "Member" },
  { name: "David Kim", avatar: "", role: "Member" }
];

// Mock data for messages
const messages = [
  {
    id: "1",
    user: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Hey everyone! Welcome to our group chat.",
    timestamp: "2023-10-25T10:00:00Z"
  },
  {
    id: "2",
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Thanks for setting this up, Alex! I'm looking forward to collaborating with everyone.",
    timestamp: "2023-10-25T10:05:00Z"
  },
  {
    id: "3",
    user: {
      name: "Miguel Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Same here! I think we should start by introducing ourselves. I'm a UX designer with 5 years of experience, currently working at TechCorp.",
    timestamp: "2023-10-25T10:08:00Z"
  },
  {
    id: "4",
    user: {
      name: "Emily Wang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
    },
    content: "Nice to meet everyone! I'm a UI designer specializing in mobile interfaces. Looking forward to our discussions!",
    timestamp: "2023-10-25T10:15:00Z"
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  });
};

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return `${formatDate(dateString)} at ${date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  })}`;
};

const GroupPage = () => {
  const [messageInput, setMessageInput] = useState("");
  const [postContent, setPostContent] = useState("");
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // Here we'd normally send the message to a database
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };
  
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      // Here we'd normally send the post to a database
      console.log("Creating post:", postContent);
      setPostContent("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 md:px-10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-grupmate-purple text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg">G</div>
              <span className="text-xl font-bold text-grupmate-dark hidden sm:inline">Grupmate</span>
            </Link>
            
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-lg">{groupData.name}</h1>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-none">
                Public
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Dashboard
              </Button>
            </Link>
            <Button className="bg-grupmate-purple hover:bg-purple-600 text-white" size="sm">
              Invite
            </Button>
          </div>
        </div>
      </header>
      
      <main className="py-6 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-auto md:flex-shrink-0">
              {groupData.image ? (
                <img 
                  src={groupData.image} 
                  alt={groupData.name} 
                  className="w-full md:w-64 h-32 md:h-40 object-cover rounded-lg shadow"
                />
              ) : (
                <div className="w-full md:w-64 h-32 md:h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-xl">{groupData.name[0]}</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{groupData.name}</h1>
              <p className="text-gray-600 mb-3">{groupData.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {groupData.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="bg-gray-100">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>{groupData.memberCount} members</span>
                <span className="mx-2">•</span>
                <span>Created {formatDate(groupData.createdAt)}</span>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="feed" className="animate-fade-in">
            <TabsList className="mb-6 w-full justify-start overflow-x-auto">
              <TabsTrigger value="feed">Feed</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            
            {/* Feed Tab */}
            <TabsContent value="feed" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Create Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreatePost}>
                        <Textarea 
                          placeholder="Share something with the group..."
                          className="min-h-24 mb-4"
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                        />
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <Button type="button" variant="outline" size="sm">
                              <Image className="mr-1" size={16} />
                              Photo
                            </Button>
                            <Button type="button" variant="outline" size="sm">
                              <Video className="mr-1" size={16} />
                              Video
                            </Button>
                          </div>
                          <Button 
                            type="submit" 
                            className="bg-grupmate-purple hover:bg-purple-600 text-white"
                            disabled={!postContent.trim()}
                          >
                            Post
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                  
                  {posts.map(post => (
                    <Card key={post.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Avatar className="mr-2 h-10 w-10">
                              <AvatarImage src={post.user.avatar} />
                              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">{post.user.name}</CardTitle>
                              <CardDescription className="text-xs">
                                {formatDateTime(post.createdAt)}
                              </CardDescription>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="py-2">
                        <p className="mb-4">{post.content}</p>
                        {post.image && (
                          <div className="mb-4 rounded-md overflow-hidden">
                            <img src={post.image} alt="" className="w-full" />
                          </div>
                        )}
                        {post.link && (
                          <div className="mb-4">
                            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-grupmate-purple hover:underline">
                              {post.link}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.likes} likes</span>
                          <span className="mx-2">•</span>
                          <span>{post.comments} comments</span>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 flex justify-between">
                        <Button variant="ghost" size="sm" className="flex-1">
                          Like
                        </Button>
                        <div className="w-px h-6 bg-gray-200"></div>
                        <Button variant="ghost" size="sm" className="flex-1">
                          Comment
                        </Button>
                        <div className="w-px h-6 bg-gray-200"></div>
                        <Button variant="ghost" size="sm" className="flex-1">
                          Share
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {events.slice(0, 2).map(event => (
                        <div key={event.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-semibold">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{formatDateTime(event.date)}</p>
                          <p className="text-sm text-gray-600">{event.location}</p>
                        </div>
                      ))}
                      <Button asChild variant="outline" className="w-full">
                        <Link to="#events">View All Events</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Members</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {members.slice(0, 4).map((member, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="mr-2 h-8 w-8">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-sm">{member.name}</div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {member.role}
                          </Badge>
                        </div>
                      ))}
                      <Button asChild variant="outline" className="w-full">
                        <Link to="#members">View All Members</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Chat Tab */}
            <TabsContent value="chat" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <Card className="h-[70vh] flex flex-col">
                    <CardHeader className="border-b">
                      <CardTitle className="text-lg">Group Chat</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto py-4 space-y-4">
                      {messages.map(message => (
                        <div key={message.id} className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={message.user.avatar} />
                            <AvatarFallback>{message.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-medium">{message.user.name}</span>
                              <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                            </div>
                            <p className="text-gray-700">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="border-t p-3">
                      <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                        <Input
                          placeholder="Type a message..."
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          type="submit" 
                          className="bg-grupmate-purple hover:bg-purple-600 text-white"
                          disabled={!messageInput.trim()}
                        >
                          <Send size={18} />
                        </Button>
                      </form>
                    </CardFooter>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Online Members</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {members.slice(0, 3).map((member, index) => (
                        <div key={index} className="flex items-center">
                          <div className="relative">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                          </div>
                          <div className="ml-3 text-sm">{member.name}</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Events Tab */}
            <TabsContent value="events" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Upcoming Events</h3>
                <Button className="bg-grupmate-purple hover:bg-purple-600 text-white">
                  <Plus className="mr-2" size={16} />
                  Create Event
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
                      <p className="text-sm font-medium">
                        {formatDate(event.date)}
                      </p>
                      <p className="text-2xl font-bold">
                        {formatTime(event.date)}
                      </p>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button className="bg-grupmate-purple hover:bg-purple-600 text-white w-full">
                        RSVP
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6">Past Events</h3>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">No past events to display</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Media Tab */}
            <TabsContent value="media" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Media Gallery</h3>
                <Button className="bg-grupmate-purple hover:bg-purple-600 text-white">
                  <Plus className="mr-2" size={16} />
                  Upload Media
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                    alt="" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6">Documents</h3>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">No documents have been shared yet</p>
                    <Button className="mt-4" variant="outline">
                      <Plus className="mr-2" size={16} />
                      Share Document
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Members Tab */}
            <TabsContent value="members" className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Group Members ({members.length})</h3>
                <Button className="bg-grupmate-purple hover:bg-purple-600 text-white">
                  <Plus className="mr-2" size={16} />
                  Invite Members
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  {members.map((member, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center">
                        <Avatar className="mr-3 h-10 w-10">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal size={18} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6 px-6 md:px-10 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Grupmate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GroupPage;
