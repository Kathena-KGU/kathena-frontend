/**
 * 공통 API 응답 타입 정의
 * @description 백엔드 API 명세에 따른 공통 응답 래퍼
 */

// 성공 응답
export interface ApiResponse<T> {
    isSuccess: true;
    code: string;
    message: string;
    result: T;
    traceId: string;
}

// 실패 응답
export interface ApiErrorResponse {
    isSuccess: false;
    code: string;
    message: string;
    result: {
        details?: Array<{
            field: string;
            reason: string;
        }>;
    } | null;
    traceId: string;
}

// 페이지네이션 응답
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    size: number;
    totalPages: number;
}

// 페이지네이션 쿼리 파라미터
export interface PaginationParams {
    page?: number;
    size?: number;
    sort?: string;
}
