// 문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
// 작업의 상태는 다음과 같습니다:

// Pending: 대기 중
// InProgress: 진행 중
// Completed: 완료됨
// 상태에 따라 다음 메시지를 반환하세요:

// Pending: "작업이 대기 중입니다."
// InProgress: "작업이 진행 중입니다."
// Completed: "작업이 완료되었습니다."


// 작업 상태를 나타내는 enum을 작성하세요.
// 여기에 작성
const enum TaskStatus {
    Pending = "대기 중",
    InProgress = "진행 중",
    Completed = "완료됨"
}

function getStatusMessage(status: TaskStatus): string {
  // 여기에 구현
  return status == TaskStatus.Completed ? "작업이 완료되었습니다." : "작업이 " + status + "입니다.";
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."

// 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 작업 상태를 나타내는 enum:

// Pending: 작업 대기 중
// InProgress: 작업 진행 중
// Completed: 작업 완료
// Failed: 작업 실패

// 함수의 요구사항:

// 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
// input은 문자열이어야 합니다.
// 문자열을 작업 상태에 따라 가공합니다:
// Pending: 문자열을 모두 대문자로 변환.
// InProgress: 문자열을 소문자로 변환.
// Completed: 문자열 앞에 "완료: "를 추가.
// Failed: 에러를 발생시킵니다.
// 작업 상태가 Failed면 에러를 발생시켜야 합니다.
// 최종 결과로 가공된 문자열 배열을 반환합니다.
// 힌트 : typeof를 사용하면 타입을 알 수 있다.

// 작업 상태를 나타내는 enum 작성
// 여기에 작성
const enum TaskStatus02 {
    Pending = "작업 대기 중",
    InProgress = "작업 진행 중",
    Completed = "작업 완료",
    Failed = "작업 실패"
}

function processTask(status: TaskStatus02, input: unknown): string {
  // 여기에 구현
    if (typeof(input) !== "string") {
        // input은 문자열이어야 합니다.
        // throw new Error("에러: 입력값은 문자열이어야 합니다.");
        return "에러: 입력값은 문자열이어야 합니다.";
    }
    if (status == TaskStatus02.Pending) {
        // Pending: 문자열을 모두 대문자로 변환.
        return input.toUpperCase();
    } else if (status == TaskStatus02.InProgress) {
        // InProgress: 문자열을 소문자로 변환.
        return input.toLowerCase();
    } else if (status == TaskStatus02.Completed) {
        // Completed: 문자열 앞에 "완료: "를 추가.
        return "완료: " + input;
    } else if (status == TaskStatus02.Failed) {
        // Failed: 에러를 발생시킵니다.
        // throw new Error("에러: 작업이 실패했습니다.");
        return "에러: 작업이 실패했습니다.";
    }
    // throw new Error("에러: 해당되는 작업 상태가 없습니다.");
    return "에러: 해당되는 작업 상태가 없습니다.";
}

// 테스트 코드
console.log(processTask(TaskStatus02.Pending, "task1")); 
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus02.InProgress, "TaskA")); 
// 기대 출력: "taska"

console.log(processTask(TaskStatus02.Completed, "Report1")); 
// 기대 출력: "완료: Report1"

console.log(processTask(TaskStatus02.Failed, "TaskX")); 
// 에러: 작업이 실패했습니다.

console.log(processTask(TaskStatus02.Pending, 42)); 
// 에러: 입력값은 문자열이어야 합니다.

// 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 로그 수준을 나타내는 enum을 작성하세요:

// Info
// Error
// Debug

// 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

// message: 로그 메시지 (문자열)
// level: 로그 수준 (enum 값)
// 반환값이 없습니다. (void 타입)
// 작성한 타입과 enum을 사용해 함수를 구현하세요:

// 로그 수준에 따라 다른 메시지를 출력합니다.
// Info: [INFO] 메시지 앞에 [INFO] 출력
// Error: 메시지 앞에 [ERROR] 출력
// Debug: 메시지 앞에 [DEBUG] 출력


// 로그 수준을 나타내는 enum 작성
// 여기에 작성
const enum LEVEL {
    Info = "INFO",
    Error = "ERROR",
    Debug = "DEBUG"
}

// 로그 함수 타입을 정의하세요.
// 여기에 작성
type LogMessage = (
    message:string,
    level:LEVEL
) => void


// 로그 함수 구현
const logMessage:LogMessage = (message:string, level:LEVEL) => {
  // 여기에 구현
    console.log("["+level+"] "+message);
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", LEVEL.Info);
logMessage("네트워크 연결 실패!", LEVEL.Error);
logMessage("디버깅 모드 활성화", LEVEL.Debug);

// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
// 두 개의 함수(processAny와 processUnknown)를 작성합니다:

// processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
// processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
// 테스트 코드를 작성하여 두 함수의 차이를 확인하세요.




function processAny(input: any): string {
  // 여기에 구현
  return String(input);
}

function processUnknown(input: unknown): string | number {
    // 여기에 구현
    if (typeof(input) ===  "string") {
        return input.toUpperCase();
    } else if (typeof(input) ===  "number") {
        return input * 10;
    } else {
        // throw new Error("에러: 입력값은 문자열 또는 숫자자이어야 합니다.");
        return "에러: 입력값은 문자열 또는 숫자이어야 합니다.";
    }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생
