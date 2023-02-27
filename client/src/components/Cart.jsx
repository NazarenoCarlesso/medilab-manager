import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const tests = useSelector(state => state.tests)
  const cart = useSelector(state => state.cart)

  const products = tests.filter(t => cart.includes(t.id))

  return (
    <div>
      {cart.join(' | ')}
      <hr/>
      {products.map(test => <h4 key={test.id}>{test.name} ${test.price}.00</h4>)}
      <h3>Total: ${products.map(p => p.price).reduce((a, b) => a + b, 0)}</h3>
    </div>
  )
}
