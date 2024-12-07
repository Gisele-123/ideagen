import Text "mo:base/Text";
import Debug "mo:base/Debug";

actor IdeaGen {
    public func generateIdea(prompt: Text): async Text {
        Debug.print("Generating idea with prompt: " # prompt);
        let url = "http://localhost:4000/generateIdea";
        let data = "{ \"prompt\": \"" # prompt # "\" }";
        let response: Text = await sendHttpRequest(url, data);
        return "Generated Idea: " # response;
    };

    func sendHttpRequest(url: Text, data: Text): async Text {
        // Simulating an HTTP request to the proxy server
        Debug.print("Sending HTTP request to " # url # " with data: " # data);
        // For the sake of this example, we'll return a mock response
        return "This is a simulated response from the AI API for prompt: " # data;
    }
}
