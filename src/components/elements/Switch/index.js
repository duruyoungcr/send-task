import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/core/SwitchUnstyled';


const BasicSwitchRoot = styled('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 54px;
  height: 32px;
  background: #F1F2F5;
  border-radius: 16px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #d0d5d9;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #0747a6;
  }
`);

const BasicSwitchInput = styled('input')(`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`);

const BasicSwitchThumb = styled('span')(`
  display: block;
  width: 27px;
  height: 27px;
  top: 1.5px;
  left: 1.5px;
  border-radius: 50%;
  background-color: #FFF;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.Switch-checked {
    left: 24px;
    top: 1.5px;
    background-color: #FFF;
  }
`);

function BasicSwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);
  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}

export default BasicSwitch;