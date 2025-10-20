import delPath from "./utils/delpath";
import { series, parallel,src,dest } from "gulp";
import { pkgPath,componentPath} from "./paths";
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from './utils/run';

export const removeDist = () => {
  return delPath(`${pkgPath}/bamboo-design`);
};

export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bamboo-design/lib/src`))
    .pipe(dest(`${pkgPath}/bamboo-design/es/src`)); 
};
//转到组件目录构建
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
