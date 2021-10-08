import marked from 'marked';
import highlight from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import shell from 'highlight.js/lib/languages/shell';
import plaintext from 'highlight.js/lib/languages/plaintext';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('scss', scss);
highlight.registerLanguage('shell', shell);
highlight.registerLanguage('plaintext', plaintext);

marked.setOptions({
    highlight: function(code, lang) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext';
        return highlight.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-'
});

export default marked;