export interface Result<T> {
	message: string;
	code: string;
	data?: T;
	requestId?: string;
}

class ResultFactory {
	public build<T = any>(message: string, code: string): Result<T>;
	public build<T = any>(message: string, code: string, data: T): Result<T>;

	public build<T = any>(
		message: string,
		code: string,
		data: T,
		requestId: string,
	): Result<T>;

	public build<T = any>(
		message: string,
		code: string,
		data?: T,
		requestId?: string,
	): Result<T> {
		return {
			message: message,
			code: code,
			data: data,
			requestId: requestId || "",
		};
	}
}

const resultFactory = new ResultFactory();
export { resultFactory };
