import React from 'react';
import { storiesOf } from '@storybook/react';
import Curriculum from '../components/Details/Curriculum';

// 앞 Test Component가 컴포넌트 이름, test는 속성이라고 생각하시면 돼요.

// ex)
// storiesOf("Tag", module).add("short", () => <Tag>Food</Tag>);

// storiesOf("Tag", module).add("long", () => (
//   <Tag>Food services for disabled</Tag>
// ));

storiesOf('Test Component', module).add('test', () => <Curriculum />);
