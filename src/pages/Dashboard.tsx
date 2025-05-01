
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GroupCard from "@/components/GroupCard";
import { Search, Plus, Users } from "lucide-react";

// Mock data for groups
const myGroups = [
  {
    id: "1",
    name: "Design Club",
    description: "A community for UI/UX designers to share work and get feedback.",
    category: "Design",
    memberCount: 48,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    visibility: "public" as const
  },
  {
    id: "2",
    name: "Marketing Team",
    description: "Internal team for marketing strategy and campaign planning.",
    category: "Business",
    memberCount: 12,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    visibility: "private" as const
  }
];

const publicGroups = [
  {
    id: "3",
    name: "Photography Enthusiasts",
    description: "Share your photos, get feedback, and discuss photography techniques.",
    category: "Photography",
    memberCount: 156,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    visibility: "public" as const
  },
  {
    id: "4",
    name: "Startup Founders",
    description: "Network with fellow founders, share experiences and resources.",
    category: "Entrepreneurship",
    memberCount: 89,
    visibility: "public" as const
  },
  {
    id: "5",
    name: "Book Club",
    description: "Monthly book discussions and recommendations for avid readers.",
    category: "Literature",
    memberCount: 42,
    visibility: "invite" as const
  },
  {
    id: "6",
    name: "Fitness Challenge",
    description: "30-day fitness challenges with daily check-ins and support.",
    category: "Health",
    memberCount: 67,
    visibility: "public" as const
  }
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter public groups based on search query
  const filteredPublicGroups = publicGroups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-grupmate-purple text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg">G</div>
            <span className="text-xl font-bold text-grupmate-dark">Grupmate</span>
          </Link>
          
          <div className="relative w-full max-w-md mx-4 hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search groups..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              asChild 
              className="bg-grupmate-purple hover:bg-purple-600 text-white hidden sm:flex"
            >
              <Link to="/create-group">
                <Plus className="mr-2" size={18} /> Create Group
              </Link>
            </Button>
            <div className="w-9 h-9 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </header>
      
      <div className="relative md:hidden w-full px-6 py-4 bg-white border-b">
        <Search className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="search"
          placeholder="Search groups..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <main className="flex-1 py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Your Dashboard</h1>
            <Button 
              asChild 
              className="bg-grupmate-purple hover:bg-purple-600 text-white sm:hidden w-full"
            >
              <Link to="/create-group">
                <Plus className="mr-2" size={18} /> Create Group
              </Link>
            </Button>
          </div>
          
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <Users size={36} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Start Your Own Group</h2>
                    <p className="mb-4 text-white/80">Create a space for your club, team, or community to connect.</p>
                    <Button asChild className="bg-white text-purple-600 hover:bg-gray-100">
                      <Link to="/create-group">
                        <Plus className="mr-2" size={16} /> Create Group
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="my-groups" className="animate-fade-in">
            <TabsList className="mb-6">
              <TabsTrigger value="my-groups">My Groups</TabsTrigger>
              <TabsTrigger value="discover">Discover Groups</TabsTrigger>
              <TabsTrigger value="invitations">Invitations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="my-groups">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myGroups.map((group) => (
                  <GroupCard key={group.id} {...group} />
                ))}
              </div>
              {myGroups.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <p className="text-gray-500">You haven't joined any groups yet.</p>
                    <Button 
                      asChild 
                      className="mt-4 bg-grupmate-purple hover:bg-purple-600 text-white"
                    >
                      <Link to="/create-group">Create Your First Group</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="discover">
              {filteredPublicGroups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPublicGroups.map((group) => (
                    <GroupCard key={group.id} {...group} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <p className="text-gray-500">
                      {searchQuery ? "No groups match your search." : "No public groups available."}
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="invitations">
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-gray-500">You don't have any pending invitations.</p>
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

export default Dashboard;
