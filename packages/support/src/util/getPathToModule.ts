//import { createRequire } from 'module';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/naming-convention
//const require = createRequire(import.meta.url);

/**
 * Retrieve the absolute path to a particular NPM package. This uses the
 * standard NodeJS package resolution progress, and so details around how
 * this works can be found in the NodeJS docs. If an error occurs
 * during the resolution process, this error will be thrown
 *
 * @param packageName The name of the package to find.
 * @returns The absolute path of the package.
 */
export function getPathToModule(packageName: string): string {
  // we look for the package.json in a package
  const packageJson = `${packageName}/package.json`;

  // try and resolve the file
  const packageJsonPath = require.resolve(packageJson);

  // get the root folder
  const packagePath = path.dirname(packageJsonPath);

  return packagePath;
}

/**
 * Retrieve the absolute path to a particular NPM package. This uses the
 * standard NodeJS package resolution progress, and so details around how
 * this works can be found in the NodeJS docs. If an error occurs
 * during the resolution process, this function will return null
 *
 * @param packageName The name of the package to find.
 * @returns The absolute path of the package, or null if an error occured.
 */
export function tryGetPathToModule(packageName: string): string | null {
  try {
    return getPathToModule(packageName);
  } catch (err) {
    return null;
  }
}
