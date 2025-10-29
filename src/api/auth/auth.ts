import type {Result} from "@/api/result.ts";

export class AuthService {
	async login(username: string, password: string): Promise<Result<string>> {
		console.log("username:", username)
		console.log("password:", password)
		return {msg: "登录成功", code: "0"};
	}
}