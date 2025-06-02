// 문제 1.아래 객체를 보고 user의 타입을 작성하세요
let user = {
	name: "Alice",
	isAdmin: true,
};
  
let user_1:{name:string,age:number,isAdmin:boolean}={
	name: "Bob",
	age:40,
	isAdmin: false,
}


// 문제2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.

let numbers:readonly number[]=[]

// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;


// 문제3. 주어진 문제 1,2 번을 푸시오
// 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
// 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.

const products_03: [string, number, boolean][] = [
	["Laptop", 1000, true],
	["Shoes", 50, false],
	["Book", 20, true],
];
  
  // 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
	products: [string, number, boolean][]
) : [string, number][] {
	const new_products:[string, number][] = products.map(([name, price]) => [name, price]);
	// 여기에 구현
	return new_products;
}
  
  // 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
	products: [string, number, boolean][]
) :[string, number, boolean][] {
	// 여기에 구현
	let product_isstock:[string, number, boolean][] = [];
	products.forEach(element => {
		if (element[2] == true) {
			product_isstock.push(element);
		}
	});
	// 여기에 구현
	return product_isstock;
}
  
// 테스트 코드
console.log(getProductNamesAndPrices(products_03));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products_03));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
  
//   문제 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요
//매개변수, 리턴 타입 정의 필요
function updateUser(user:{name:string,age?:number}) :{name:string, age:number} {
	// 나이가 제공되지 않으면 18로 설정
	return {...user, age: user.age ?? 18};
}
  
// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

// 문제5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.
// proudcts 타입정의  필요 
const products_05:{name:string,price:number,category?:string}[] = [
	{ name: "Laptop", price: 1000, category: "Electronics" },
	{ name: "Shoes", price: 50, category: "Fashion" },
	{ name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string):string[] {
	// 여기에 구현
	const result:string[]=[];
	for (const product of products_05) {
		if (product.category == category) {
			result.push(product.name);
		}
	}
	return result;
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []

