import run from '../build/utils/run';
import { pkgPath } from '../build/paths';
import { series } from 'gulp';
import type { TaskFunction } from 'gulp';

export const publishComponent = async () => {
  run('release-it', `${pkgPath}/bamboo-design`);
};
const build:TaskFunction = series(async () => publishComponent());
export default build;
