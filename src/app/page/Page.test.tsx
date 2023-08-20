import { render, screen } from '@testing-library/react';

import Home from '@/app/page/index';

describe('Home Page', () => {
  it('렌더링이 올바르게 된다', () => {
    render(<Home />);

    expect(screen.queryByText('Get started by editing')).not.toBeNull();
    expect(screen.queryByText('src/app/page/index.tsx')).not.toBeNull();
    expect(screen.queryByText('By')).not.toBeNull();
    expect(screen.queryByAltText('Vercel Logo')).not.toBeNull();
    expect(screen.queryByAltText('Next.js Logo')).not.toBeNull();
    expect(screen.queryByText('Docs')).not.toBeNull();
    expect(
      screen.queryByText(
        'Find in-depth information about Next.js features and API.',
      ),
    ).not.toBeNull();
    expect(screen.queryByText('Learn')).not.toBeNull();
    expect(
      screen.queryByText(
        'Learn about Next.js in an interactive course with quizzes!',
      ),
    ).not.toBeNull();
    expect(screen.queryByText('Templates')).not.toBeNull();
    expect(
      screen.queryByText('Explore the Next.js 13 playground.'),
    ).not.toBeNull();
    expect(screen.queryByText('Deploy')).not.toBeNull();
    expect(
      screen.queryByText(
        'Instantly deploy your Next.js site to a shareable URL with Vercel.',
      ),
    ).not.toBeNull();
  });
});
