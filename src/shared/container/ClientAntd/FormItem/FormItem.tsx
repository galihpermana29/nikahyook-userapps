'use client';

import { Form } from 'antd';
import type { FormItemProps } from 'antd';

// INFO: this enables you to use Form.Item in server components, while also rendering
// form control components such as <Input />, <Select /> etc. as a server component.

// LoginFormContainer.tsx
// EXAMPLE:

// THIS IS A CLIENT COMPONENT
// "use client";
//
// export default function LoginFormContainer(props: FormProps) {
//    const [form] = Form.useForm();
//
//    {...mutation logic here}
//
//    # {...props} should enable you to further reuse and re-style the form component
//    <Form onFinish={mutate} {...props}>
//      {children}
//    </Form>
// }

// page.tsx
// "children" props should be using this <FormItem /> component like this

// THIS IS A SERVER COMPONENT
//
// <LoginFormContainer layout="vertical">
//    <FormItem required name="email" label="Email">
//      /* Inside <FormItem /> will be rendered as a server component*/
//      <Input />
//    </FormItem>
//
// </LoginFormContainer>

export default function FormItem(props: FormItemProps) {
  return <Form.Item {...props}>{props.children}</Form.Item>;
}
