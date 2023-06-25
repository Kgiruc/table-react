import { render, screen } from '@testing-library/react';
import MoreDetailsLayout from '../MoreDetailsLayot';

describe('MoreDetailsLayout', () => {
  it('renders children', () => {
    render(
      <MoreDetailsLayout>
        <div>Child Component</div>
      </MoreDetailsLayout>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
