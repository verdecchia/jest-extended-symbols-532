# [issue 532] jest-extended: toHaveBeenCalledOnceWith does not work with Symbols 

## Usage
1. run `yarn install`
2. run `yarn test`

Results: if functions are called the right way, both succeeds. If they are called the wrong way, both fail but with different message error:

* toHaveBennCalledWith error:
 ```
 Expected: Symbol(foo)
 Received: Symbol(foo)
```
* toHaveBeenCalledOnceWith error:
```
Expected mock function to have been called exactly once with Symbol(foo), but it was called with:
      Symbol(foo)
```
