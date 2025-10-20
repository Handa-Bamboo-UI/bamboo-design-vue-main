import run from '../build/utils/run';
import { pkgPath } from '../build/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/bamboo-design`);
};
export default series(async () => publishComponent());
