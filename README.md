## Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/5055

**How to run**
- `npm install --global pnpm`
- `pnpm install`
- `pnpm run lint`

```shell
(feat/reproducer)$ pnpm run lint

> 5055@1.0.0 lint /home/timon/dev/workspaces/js-fun/repro-5055
> pnpm --stream -r lint

packages/core lint$ eslint . --max-warnings 0
packages/core lint: /home/timon/dev/workspaces/js-fun/repro-5055/packages/core/src/index.ts
packages/core lint:   11:30  error  Unsafe argument of type error typed assigned to a parameter of type `OTLPExporterNodeConfigBase | undefined`  @typescript-eslint/no-unsafe-argument
packages/core lint: ✖ 1 problem (1 error, 0 warnings)
packages/core lint: Failed
/home/timon/dev/workspaces/js-fun/repro-5055/packages/core:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @5055/core@1.0.0 lint: `eslint . --max-warnings 0`
Exit status 1
 ELIFECYCLE  Command failed with exit code 1.
```
