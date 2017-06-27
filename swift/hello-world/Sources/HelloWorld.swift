//Solution goes in Sources
func hello(name: String? = nil) -> String {
    if name != nil {
        return String(format: "Hello, %s!", name)
    } else {
        return "Hello, World!"
    }
}
