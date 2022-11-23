import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KT24qAHh7sFAcrC2leY84VUbANKqcZJBOiZ9nFfNIGUv9Kw23WtvgAhyCvQTPuhUddbJCsfhMarODxgLAPtdyvN00z968Zobf"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
