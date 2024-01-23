import sinon from "sinon"
import { validate } from "./validation.ts"
import { expect } from "chai"

describe("Validation", () => {

   it("should validate email", () => {
      const spy = sinon.spy(validate)

      spy('email', 'email@example.com')

      expect(spy.returnValues[0]).not.be.eq(null)
   })

   it("should not validate wrong email", () => {
      const spy = sinon.spy(validate)

      spy('email', 'test')

      expect(spy.returnValues[0]).to.be.eq(null)
   })
})
