
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Here we'd normally connect to Supabase for authentication
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For the prototype, we'll just simulate success
      toast({
        title: "Account created!",
        description: "Welcome to Grupmate! Your account has been created successfully.",
      });
      
      // Redirect to dashboard (in a real app)
      window.location.href = "/dashboard";
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="bg-grupmate-purple text-white rounded-lg w-9 h-9 flex items-center justify-center font-bold text-xl">G</div>
            <span className="text-xl font-bold text-grupmate-dark">Grupmate</span>
          </Link>
        </div>
        
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your information to get started with Grupmate</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-grupmate-purple hover:bg-purple-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Sign up"}
                  </Button>
                </div>
                <div className="text-xs text-center text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-grupmate-purple hover:underline">Terms of Service</Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-grupmate-purple hover:underline">Privacy Policy</Link>.
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-grupmate-purple hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
