import vite from '@vite/core';
import { Router, assets } from '@vite/router';
import { Tag } from './components/common/tags';

const router = Router({
  routes: [
    { path: '/?', defaults: { name: 'home' } },
    { path: '/api', defaults: { action: 'api' } }
  ],
  tags: ['prod']
});

export default function App() {
  return (
    <vite
      router={router}
      imports={['./components', './ assets/']}
      buildOptions={{
        html: { exclude: ['app.css'] },
        js: { compile: true }
      }}
    >
      {/* Core Vite components */}
      <Tag name="home" />
      <Tag action="api" />
      
      {/* Your frontend components here */}
    </vite>
  );
}
