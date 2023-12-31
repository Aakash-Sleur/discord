'use client'

import { Circles } from "react-loader-spinner"

export const Loader = () => (
    <Circles
        height={80}
        width={80}
        color="#5562ea"
        visible={true}
        ariaLabel="loading..."
    />
)