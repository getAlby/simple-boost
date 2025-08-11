import { SimpleBoostButton } from "../../../dist/simple-boost-react"

function App() {

  return (
    <div>
      <SimpleBoostButton
        address="hello@getalby.com"
        amount={1}
        currency="sats"
        onSuccess={(e) => console.log('Payment succeeded!', e)}
      />

    </div>
  )
}

export default App
