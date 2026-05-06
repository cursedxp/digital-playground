import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  components: Components;
}

/**
 * Wrapper component for ReactMarkdown with consistent configuration
 * Provides a single place to manage markdown rendering settings
 */
export function MarkdownRenderer({ content, components }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
