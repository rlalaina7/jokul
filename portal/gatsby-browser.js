/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "document-register-element";
import "@fremtind/jkl-core/build/css/core.css";
import "prismjs/themes/prism.css";
import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();