
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "Education",
  "Workplace",
  "Club",
  "Friends",
  "Sports",
  "Gaming",
  "Arts",
  "Technology",
  "Health",
  "Travel",
  "Food",
  "Other"
];

const CreateGroup = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !category || !description) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Here we'd normally connect to Supabase to store the group data
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For the prototype, we'll just show success
      toast({
        title: "Group created!",
        description: `"${name}" has been created successfully.`,
      });
      
      // Redirect to the new group (in a real app, this would be the actual group ID)
      navigate("/group/1");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create group. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-grupmate-purple text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg">G</div>
            <span className="text-xl font-bold text-grupmate-dark">Grupmate</span>
          </Link>
          
          <Link to="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>
      
      <main className="py-8 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Create a New Group</h1>
            <p className="text-gray-600">
              Set up your group's profile and invite members to join.
            </p>
          </div>
          
          <Card className="p-6 md:p-8 animate-fade-in">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Group Name *</Label>
                  <Input 
                    id="name"
                    placeholder="Enter a name for your group"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={category}
                    onValueChange={setCategory}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe what your group is about"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1 min-h-24"
                  />
                </div>
                
                <div>
                  <Label>Visibility *</Label>
                  <RadioGroup 
                    value={visibility} 
                    onValueChange={setVisibility}
                    className="mt-2 space-y-3"
                  >
                    <div className="flex items-center space-x-3 rounded-md border p-4">
                      <RadioGroupItem value="public" id="visibility-public" />
                      <Label htmlFor="visibility-public" className="flex flex-col">
                        <span className="font-medium">Public</span>
                        <span className="text-sm text-gray-500">Anyone can find and join your group</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-md border p-4">
                      <RadioGroupItem value="private" id="visibility-private" />
                      <Label htmlFor="visibility-private" className="flex flex-col">
                        <span className="font-medium">Private</span>
                        <span className="text-sm text-gray-500">Hidden from searches, members join by invitation only</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-md border p-4">
                      <RadioGroupItem value="invite" id="visibility-invite" />
                      <Label htmlFor="visibility-invite" className="flex flex-col">
                        <span className="font-medium">Invite Only</span>
                        <span className="text-sm text-gray-500">Visible in searches but requires approval to join</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="group-image">Group Image</Label>
                  <div className="mt-1 flex items-center">
                    {imagePreview ? (
                      <div className="relative w-32 h-32 rounded-md overflow-hidden">
                        <img 
                          src={imagePreview} 
                          alt="Group preview" 
                          className="w-full h-full object-cover"
                        />
                        <Button 
                          type="button"
                          variant="outline" 
                          size="sm"
                          className="absolute bottom-2 right-2 bg-white/80"
                          onClick={() => {
                            setImage(null);
                            setImagePreview(null);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <Label 
                        htmlFor="file-upload"
                        className="cursor-pointer border-2 border-dashed border-gray-300 rounded-md px-6 py-10 flex flex-col items-center justify-center w-full"
                      >
                        <div className="text-center">
                          <div className="mt-2 flex text-sm text-gray-600">
                            <span className="relative bg-white rounded-md font-medium text-grupmate-purple hover:text-purple-500">
                              Upload a file
                            </span>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </div>
                        <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only" 
                          onChange={handleImageChange} 
                          accept="image/*"
                        />
                      </Label>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (optional)</Label>
                  <Input 
                    id="tags"
                    placeholder="Separate tags with commas (e.g. sports, coding, design)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Tags help make your group more discoverable
                  </p>
                </div>
                
                <div className="pt-4 flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-grupmate-purple hover:bg-purple-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Group..." : "Create Group"}
                  </Button>
                </div>
              </div>
            </form>
          </Card>
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

export default CreateGroup;
