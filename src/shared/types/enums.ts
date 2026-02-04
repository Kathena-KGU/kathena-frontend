/**
 * 공통 Enum 타입 정의
 * @description 프로젝트 전반에서 사용되는 상태/유형 정의
 */

// 사용자 역할
export type UserRole = 'USER' | 'MEMBER' | 'ADMIN';

// 사용자 상태
export type UserStatus = 'PENDING' | 'ACTIVE' | 'REJECTED' | 'SUSPENDED';

// 재학 상태
export type EnrollmentStatus = 'ENROLLED' | 'LEAVE';

// 게시판 카테고리
export type PostCategory = 'NOTICE' | 'ACTIVITY' | 'FREE' | 'RECRUIT';

// 주문 상태
export type OrderStatus = 'ORDERED' | 'COMPLETED' | 'CANCELED';

// 상품 상태
export type ProductStatus = 'ACTIVE' | 'SOLD_OUT' | 'INACTIVE';

// 내전 상태
export type MatchStatus = 'OPEN' | 'CLOSED' | 'DONE';

// 지원서 처리 상태
export type ApplicationReviewStatus = 'SUBMITTED' | 'REVIEWING' | 'ACCEPTED' | 'REJECTED';

// 지원 유형
export type ApplyType = 'NEW' | 'RETURNING';

// 포인트 원장 유형
export type PointLedgerType = 'EARN' | 'SPEND' | 'ADJUST' | 'REFUND';
export type PointDirection = 'PLUS' | 'MINUS';

// 정책 문서 유형
export type PolicyType = 'PRIVACY_COLLECTION' | 'PRIVACY_POLICY' | 'TERMS' | 'COOKIE';
