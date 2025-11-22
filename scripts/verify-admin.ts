import { storage } from "../server/storage";
import { insertUserSchema } from "../shared/schema";

async function verifyAdmin() {
    console.log("Verifying Admin User Management...");

    try {
        // 1. Create a user
        console.log("Creating user...");
        const newUser = {
            username: "testadmin",
            password: "password123",
            role: "admin"
        };
        const createdUser = await storage.createUser(newUser);
        console.log("User created:", createdUser.username);

        // 2. Get user by username
        console.log("Fetching user by username...");
        const fetchedUser = await storage.getUserByUsername("testadmin");
        if (fetchedUser && fetchedUser.username === "testadmin") {
            console.log("User fetched successfully.");
        } else {
            console.error("Failed to fetch user.");
        }

        // 3. Verify password (simple check)
        if (fetchedUser && fetchedUser.password === "password123") {
            console.log("Password verified.");
        } else {
            console.error("Password mismatch.");
        }

        console.log("Verification complete.");
        process.exit(0);
    } catch (error) {
        console.error("Verification failed:", error);
        process.exit(1);
    }
}

verifyAdmin();
