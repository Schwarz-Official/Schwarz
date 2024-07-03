import { expect, test } from 'vitest';
import {Button} from '../src/components/Button'

describe('Button components', () => {
    test('renders button with text', () => {
        const buttonText = 'Click me';
        const { getByText } = render(<Button text={buttonText} />);
        const button = getByText(buttonText);
        expect(button).toBeInTheDocument();
    });

    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('renders previous step icon if isPreviousStep is true', () => {
        const { container } = render(<Button text="Previous" isPreviousStep />);
        const icon = container.querySelector('svg[data-testid="previous-icon"]');
        expect(icon).toBeInTheDocument();
    });

    test('renders forward step icon if isForwardStep is true', () => {
        const { container } = render(<Button text="Next" isForwardStep />);
        const icon = container.querySelector('svg[data-testid="forward-icon"]');
        expect(icon).toBeInTheDocument();
    });

    test('applies custom classname', () => {
        const { container } = render(<Button text="Custom" classname="custom-class" />);
        const button = container.querySelector('.custom-class');
        expect(button).toBeInTheDocument();
    });
});