# Google Typescript Style Guide
## Syntax
### Identifiers (식별자)
Identifier는 ASCII 알파벳, 숫자, _(underscore)로만 작성한다. 

| Style | Category |
|-------|----------|
|`UpperCamelCase`|class / interface / type / enum / decorator / type parameters|
|`lowerCamelCase`|variable / parameter / function / method / property / module alias|
|`CONSTANT_CASE`|global constant values, including enum values|
|`#ident`|private identifiers are never used.|

#### Abbreviations (약어)
약어는 그 자체가 한 단어인 것 처럼 사용한다. 즉, `loadHTTPURL` 이 아닌 `loadHttpUrl`의 형태로 사용한다. `XMLHttpRequest`같은 경우는 제외한다.

#### $
일반적으로 `$`는 사용하지 않아야 한다. 그러나 서드파티 프레임워크에 의한 경우는 제외한다.

#### Type parameters (타입 매개변수)
`Array<T>` 와 같은 경우는 한개의 대문자(`T`)나 `UpperCamelCase`로 작성한다.

#### Test names
xUnit-style 테스트 프레임워크에서 테스트 메서드이름은 `_`식별자를 이용해서 구성한다. (`testX_whenY_doesZ`)

#### Not use `_` as a prefix or suffix.

#### Imports
Module namespace는 `lowerCamelCase`로, 파일이름은 `snake_case`여야 한다.
```typescript
import * as fooBar from './foo_bar';
```
jQuery에서는 `$` 접두사를, Threejs에서는 `THREE`접두사를 사용한다.

#### Constants
`CONSTANT_CASE`는 바꿀 수 없는 값을 의미한다. 만약 바꿀 수 있더라도 바꾸지 말아야 함을 의미한다.
```typescript
const UNIT_SUFFIXES = {
  'milliseconds;': 'ms',
  'seconds': 's',
};
```
상수는 클래스의 `static readonly` 프로퍼티가 될 수도 있다.
```typescript
class Foo {
  private static readonly MY_SPECIAL_NUMBER = 5;
  
  bar() {
    return 2 * Foo.MY_SPECIAL_NUMBER;
  }
}
```
만약 값이 프로그램이 실행 중일 때, 2번 이상 초기화되거나 유저가 그것을 바꿔야 할 때는 `lowerCamelCase`를 사용해야 한다.

#### Aliases
이미 존재하는 심볼에 대한 local scope alias를 생성할 때는, 그 식별자의 포맷을 사용한다. local alias는 이미 있는 이름의 포맷과 같아야만 한다. 변수는 `const`를 사용하고, 클래스 필드에서는 `readonly`를 사용한다.
```typescript
const {Foo} = SomeType;
const CAPACITY = 5;

class Teapot {
	readonly BrewStateEnum = BrewStateEnum;
  	readonly CAPACITY = CAPACITY;
}
```

#### Naming Style
타입스크립트는 타입으로 정보를 표현하기 때문에, 이름에는 타입에 관한 정보가 들어가면 안된다.
몇가지 구체적인 예를 들자면:
- private 프로퍼티나 메서드의 앞이나 뒤에 \_를 붙이지 않는다
- optional parameter에 `opt_`접두사를 붙이지 않는다.
- interface라고 표시하지 않는다. (~~`IMyInterface`~~, ~~`MyFooInterface`~~). 클래스를 위한 인터페이스는 왜 인터페이스가 존재하는지를 이름으로 표현한다.
- Observable에 접미사 `$`를 붙이는 건 흔한 컨벤션이며, concrete value와 observable value간의 혼동을 막는데 도움이 된다. 그러나 프로젝트 내에서는 일관되어야 한다.

#### Descriptive names
이름은 기술적이며 새로운 독자에게 명료해야 한다. 모호하거나 친숙하지 않은 약어는 사용하지 않으며 단어 사이의 알파벳을 지우지 않는다.

- 10줄이하의 범위에서 사용되는 변수나 exported API의 일부가 아닌 변수는 짧은 변수이름을 사용해도 된다.(e.g. 알파벳 한 글자)

### File encoding: UTF-8
아스키 문자가 아니라면 실제 유니코드 문자를 사용한다.(e.g. `∞`). 출력할 수 없는 문자에 대해서는 16진수나 unicode escapes(e.g. `\u221e`)를 사용한다.
```typescript
const units = 'μs';

const output = '\ufeff' + content;  // byte order mark
```

### Comments & Documentation
#### JSDoc vs comments
주석은 두가지 종류가 있다. 
- JSDoc (`/** ... */`)는 코드의 사용자가 읽어야 하는 주석을 적는다.
- non-JSDoc comments (`// ...` or `/* ... */`)는 오직 구현에 관련한 주석을 적는다.

#### JSDoc은 자바스크립트 스타일을 따른다.
일반적으로 [JavaScript style guide's rules for JSDoc](https://google.github.io/styleguide/jsguide.html#jsdoc)의 7.1에서 7.5를 따른다. 나머지 부분은 이 규칙에 대한 예외들을 다룬다.

#### 모든 모듈의 top-level exports를 문서화한다.
`/** JSDoc */` 주석을 유저에게 정보를 전달하는 용도로 사용한다. 단순히 property나 parameter의 이름만 보여주는 것이 아니다. reviewer의 판단에 따라 이름과 용도가 명확하지 않은 모든 속성 및 메서드(export, public 여부)를 문서화해야한다.

예외: `@NgModule` 클래스와 같은 기호에는 설명이 필요하지 않습니다.

#### TypeScript와 무관한 주석은 생략한다.
예를 들어 type들을 `@param`이나 `@return`블럭에 선언하지 않는다. `@implements`, `@enum`, `@private`을 사용하지 않는다.
코드에는 `implements`, `enum`, `private`키워드를 사용한다.

#### `@override`를 사용하지 않는다.

#### 주석이 실제로 정보를 제공하도록 한다.
때로는 함수나 parameter의 이름만으로도 충분한 경우가 있다.
- parameter의 이름이나 타입을 단순히 다시 말해주는 주석은 피한다. e.g.
```js
/** @param fooBarService The Bar service for the Foo application. */
```
- 이 규칙에 의해 `@param`이나 `@return`과 같은 라인은 그들이 실제로 정보를 갖고 있을 때에만 필요하다. 다른 경우에는 생략해야 한다.
```js
/**
 * POSTs the request to start coffee brewing.
 * @param amountLitres The amount to brew. Must fit the pot size!
 */
brew(amountLitres: number, logger: Logger) {
  // ...
}
```

#### Parameter property comments
parameter property는 클래스가 생성자에게 parameter를 표시하여 필드 및 생성자 매개변수를 단일 선언으로 선언하는 경우이다.
예를 들어 `constructor(private readonly foo: Foo)`는 클래스에 `foo`필드가 있음을 선언한다.

이런 필드를 문서화하기 위해 JSDoc의 `@param` 어노테이션을 사용한다. 에디터는 생성자 호출과 property 접근 시에 이 설명을 보여준다.
```js
/** This class demonstrates how parameter properties are documented. */
class ParamProps {
  /**
   * @param percolator The percolator used for brewing.
   * @param beans The beans to brew.
   */
  constructor(
    private readonly percolator: Percolator,
    private readonly beans: CoffeeBean[]) {}
}
```
```js
/** This class demonstrates how ordinary fields are documented. */
class OrdinaryClass {
  /** The bean that will be used in the next call to brew(). */
  nextBean: CoffeeBean;

  constructor(initialBean: CoffeeBean) {
    this.nextBean = initialBean;
  }
}
```

#### 함수 호출 시의 주석
필요하다면 호출하는 위치에서 block comment를 이용해서 인라인으로 파라미터를 문서화한다. 또한 객체 리터럴 및 destructuring을 사용한 변수도 고려한다. 주석의 정확한 형식과 위치는 규정되어있지 않다.
```js
// Inline block comments for parameters that'd be hard to understand:
new Percolator().brew(/* amountLitres= */ 5);
// Also consider using named arguments and destructuring parameters (in brew's declaration):
new Percolator().brew({amountLitres: 5});
```
```js
/** An ancient {@link CoffeeBrewer} */
export class Percolator implements CoffeeBrewer {
  /**
   * Brews coffee.
   * @param amountLitres The amount to brew. Must fit the pot size!
   */
  brew(amountLitres: number) {
    // This implementation creates terrible coffee, but whatever.
    // TODO(b/12345): Improve percolator brewing.
  }
}
```

#### JsDoc을 decorator보다 먼저 적는다.
클래스나 매서드가 `@Component`같은 데코레이터와 JsDoc을 함께 갖고 있다면, JsDoc을 decorator보다 먼저 쓴다.
- 이렇게 하지 말고
```js
@Component({
  selector: 'foo',
  template: 'bar',
})
/** Component that prints "bar". */
export class FooComponent {}
```
- 이렇게 해라
```js
/** Component that prints "bar". */
@Component({
  selector: 'foo',
  template: 'bar',
})
export class FooComponent {}
```

