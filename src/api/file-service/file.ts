import { type Result, resultFactory } from "@/api/result.ts";
import axiosInstance from "@/api/axios.ts";

export interface FileInfoResponse {
	id: string;
	name: string;
	downloadName: string;
	path: string;
	size: number;
}

class FileApi {
	public async getFileInfo(id: string): Promise<Result<FileInfoResponse>> {
		// 使用 await 等待请求完成，直接获取响应
		const response = await axiosInstance.get(`/file-service/${id}`);
		const data = response.data;
		// 直接返回构建的结果
		return resultFactory.build(data.message, data.code, data.data);
	}
}

export default FileApi;
