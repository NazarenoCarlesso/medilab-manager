import React from 'react'

export default function TestUI({ id, name, description, price }) {
    return (
        <div class="TestUI">
            <div class="content">
                <div class="title">{name}</div>
                <div class="price">${price}.00</div>
                <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
            </div>
            <button>
                Buy now
            </button>
        </div>
    )
}