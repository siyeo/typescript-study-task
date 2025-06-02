// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:
// id: 고유 ID (숫자)
// name: 이름 (문자열)
// email: 이메일 (문자열, 선택 속성)

// 인터페이스 작성
interface IUser01 {
	id:number;
	name:string;
	email?:string;
}
// 타입 작성
type TUser01 = {
	id:number;
	name:string;
	email?:string;
}

const user01:IUser01 = {
	id: 1,
	name: "Alice",
};
  
const userWithEmail:TUser01 = {
	id: 2,
	name: "Bob",
	email: "bob@example.com",
};
  
// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
// 사용자(User)는 다음 속성을 가집니다:
// id: 숫자
// name: 문자열
// address: 객체 ({city: 문자열,zipCode: 숫자})

// User 타입을 작성하세요.
// 여기에 작성
type TUser02 = {
	id:number;
	name:string;
	address:{
		city:string;
		zipCode:number;
	}
}

// User 타입을 사용하여 아래 객체를 작성하세요.
const user02:TUser02 = {
	id: 1,
	name: "Alice",
	address: {
		city: "Seoul",
		zipCode: 12345,
	},
};

// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
// 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)
// 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
// 작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.

// User 인터페이스 작성
// 여기에 작성
interface IUser03 {
	id:number;
	name:string;
	email?:string;
}
// Admin 인터페이스 작성 (User 확장)
// 여기에 작성
interface IAdmin03 extends IUser03 {
	role:string;
}

const normalUser:IUser03 = {
	id: 1,
	name: "Alice",
	email: "alice@example.com",
};

const adminUser:IAdmin03 = {
	id: 2,
	name: "Bob",
	role: "Administrator",
};

// 문제 4. 아래 조건에 따라 type을 확장하세요.
// 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
// 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
// 작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.

// Product 타입 작성
// 여기에 작성
type TProduct04 = {
	id:number;
	name:string;
	price:number;
}

// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성
type TDiscountedProduct = TProduct04 & {
	discount:number;
}

const normalProduct:TProduct04 = {
	id: 1,
	name: "Laptop",
	price: 1000,
};

const discountedProduct04:TDiscountedProduct = {
	id: 2,
	name: "Smartphone",
	price: 800,
	discount: 10,
};
  
// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// 상품(Product)은 다음 속성을 가집니다:
// id: 숫자
// name: 문자열
// price: 숫자
// 주문(Order)은 다음 속성을 가집니다:
// orderId: 숫자
// products: Product 타입 배열
// totalPrice: 숫자
  
// Product 타입 작성
// 여기에 작성
type TProduct05 = {
	id:number;
	name:string;
	price:number;
}

// Order 타입 작성
// 여기에 작성
type TOrder05 = {
	orderId:number;
	products: TProduct05[];
	totalPrice:number;
}

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order:TOrder05 = {
	orderId: 101,
	products: [
	  { id: 1, name: "Laptop", price: 1000 },
	  { id: 2, name: "Mouse", price: 50 },
	],
	totalPrice: 1050,
};
  
// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// BaseUser라는 인터페이스를 작성하세요:
// id: 숫자
// name: 문자열
// AdminUser라는 타입을 작성하세요:
// BaseUser를 확장합니다.
// 추가로 role: 문자열을 포함합니다.
// GuestUser라는 타입을 작성하세요:
// BaseUser를 확장합니다.
// 추가로 visitCount: 숫자를 포함합니다.
  
// BaseUser 인터페이스 작성
// 여기에 작성
interface BaseUser {
	id:number;
	name:string;
}
// AdminUser 타입 작성
// 여기에 작성
type AdminUser = BaseUser & {
	role:string;
}
// GuestUser 타입 작성
// 여기에 작성
type GuestUser = BaseUser & {
	visitCount:number;
}
// 아래 객체를 작성하세요.
const admin: AdminUser = {
	id: 1,
	name: "Alice",
	role: "Administrator",
};
  
const guest: GuestUser = {
	id: 2,
	name: "Bob",
	visitCount: 5,
};
  
  