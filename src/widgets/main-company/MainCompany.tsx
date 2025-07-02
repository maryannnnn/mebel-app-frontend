import React from "react";
import type { CompaniesMainQueryResult } from "@/types/mainTypes";

type Props = CompaniesMainQueryResult;

export default function MainCompany({ data }: Props) {
    return (
        <section>
            {data.data.map((index) => (
                <article key={index.id}>
                    <h2>{index.id}</h2>
                </article>
            ))}
        </section>
    );
}
