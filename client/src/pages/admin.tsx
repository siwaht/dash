import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "../../../shared/schema";
import { Loader2, Plus, User as UserIcon } from "lucide-react";

export default function AdminPage() {
    const [token, setToken] = useState<string | null>(null);
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loginForm = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const createUserForm = useForm<InsertUser>({
        resolver: zodResolver(insertUserSchema),
        defaultValues: {
            username: "",
            password: "",
            role: "admin"
        }
    });

    const handleLogin = async (data: any) => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                const user = await res.json();
                setToken(user.username); // Simple auth for now
                fetchUsers();
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUsers = async () => {
        // In a real app, we would fetch users here. 
        // For now, we don't have a list users endpoint, so we'll just show the create form.
    };

    const handleCreateUser = async (data: InsertUser) => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                alert("User created successfully");
                createUserForm.reset();
            } else {
                const error = await res.json();
                alert(error.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="w-full max-w-md p-8 bg-slate-900 rounded-xl border border-slate-800">
                    <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Username</label>
                            <input
                                {...loginForm.register("username")}
                                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                            <input
                                type="password"
                                {...loginForm.register("password")}
                                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <button
                        onClick={() => setToken(null)}
                        className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid gap-8">
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-cyan-500/10 rounded-lg">
                                <Plus className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h2 className="text-xl font-semibold text-white">Create New User</h2>
                        </div>

                        <form onSubmit={createUserForm.handleSubmit(handleCreateUser)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Username</label>
                                    <input
                                        {...createUserForm.register("username")}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                                    />
                                    {createUserForm.formState.errors.username && (
                                        <p className="text-red-400 text-sm mt-1">{createUserForm.formState.errors.username.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                                    <input
                                        type="password"
                                        {...createUserForm.register("password")}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                                    />
                                    {createUserForm.formState.errors.password && (
                                        <p className="text-red-400 text-sm mt-1">{createUserForm.formState.errors.password.message}</p>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create User"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
