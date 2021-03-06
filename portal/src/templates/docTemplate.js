import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import "@fremtind/jkl-core/core.min.css";
import "../pages/style.scss";
import { jokulRenderer } from "../presentation/markdownRenderer";
import ReactMarkdown from "react-markdown";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { rawMarkdownBody } = markdownRemark;

    return (
        <Layout>
            <ReactMarkdown renderers={jokulRenderer}>{rawMarkdownBody}</ReactMarkdown>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            rawMarkdownBody
            frontmatter {
                path
                title
            }
        }
    }
`;
