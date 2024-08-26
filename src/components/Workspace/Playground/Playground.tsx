import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror";
import Split from "react-split";
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

type PlaygroundProps = {
    
};

const Playground: React.FC<PlaygroundProps> = () => {
    
    return (
      <div className="flex flex-col bg-dark-layer-1 relative">
        <PreferenceNav />
        <Split
          className="h-[calc(100vh-94px)]"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="w-full overflow-auto">
            <CodeMirror theme={vscodeDark}  />
          </div>
        </Split>
      </div>
    );
};
export default Playground;