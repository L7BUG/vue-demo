import { type Result, resultFactory } from "@/api/result.ts";

class AuthService {
	public async login(
		username: string,
		password: string,
	): Promise<Result<string>> {
		console.log("username:", username);
		console.log("password:", password);
		return resultFactory.build("操作成功", "0", "1234");
	}
}

export default AuthService;
