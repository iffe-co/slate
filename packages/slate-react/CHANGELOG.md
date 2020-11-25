# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.4](https://github.com/solidoc/iffe-react/compare/@solidoc/slate-react@0.1.3...@solidoc/slate-react@0.1.4) (2020-11-25)


### Bug Fixes

* 修改viewApply的参数node,改为path ([39b11db](https://github.com/solidoc/iffe-react/commit/39b11db3819fa221e8927e3919aa4930ad93569a))





## [0.1.3](https://github.com/solidoc/iffe-react/compare/@solidoc/slate-react@0.1.2...@solidoc/slate-react@0.1.3) (2020-11-24)


### Bug Fixes

* 修改viewApply逻辑 ([f3661c6](https://github.com/solidoc/iffe-react/commit/f3661c6357ccf379f52ef69fc04116e5cf72fb2c))





## [0.1.2](https://github.com/solidoc/iffe-react/compare/@solidoc/slate-react@0.1.1...@solidoc/slate-react@0.1.2) (2020-11-24)


### Bug Fixes

* 修改viewApply ([b8073f7](https://github.com/solidoc/iffe-react/commit/b8073f755c4205e689bfc8a98bd1171d48b72b3a))





## [0.1.1](https://github.com/solidoc/iffe-react/compare/@solidoc/slate-react@0.1.0...@solidoc/slate-react@0.1.1) (2020-11-24)


### Bug Fixes

* fix(update slate-react): ([5bd89ff](https://github.com/solidoc/iffe-react/commit/5bd89ff94090479d6257aff9b2fb674fe9a82cb8))





# 0.1.0 (2020-11-23)

### Features

- 增加了 demo ([c3d80f0](https://github.com/solidoc/iffe-react/commit/c3d80f063a07599ba1ac1f96364ab9986cdd2281))
- 扩展 viewApply 方法 ([9da0d46](https://github.com/solidoc/iffe-react/commit/9da0d467422aefe3ec91adc61ac8a0d9830ae3f4))

# 0.59.0 (2020-09-25)

### Bug Fixes

- **slate-react:** update onDOMBeforeInput when onDOMBeforeInput prop changes ([#3617](https://github.com/solidoc/iffe-react/issues/3617)) ([#3829](https://github.com/solidoc/iffe-react/issues/3829)) ([63f0999](https://github.com/solidoc/iffe-react/commit/63f099952ea36af355dab6a84b1dffd29b46f27e))

## 0.58.4 (2020-07-08)

## 0.58.3 (2020-06-04)

## 0.58.2 (2020-05-27)

## 0.58.1 (2020-05-11)

# 0.58.0 (2020-05-06)

### Reverts

- Revert "Revert "TypeScript Improvement: Use `[key: string]: unknown`, not `[key: string]: any` (#3565)"" ([d82ffe4](https://github.com/solidoc/iffe-react/commit/d82ffe49a5253de08adab8f36ac7f07879037977)), closes [#3565](https://github.com/solidoc/iffe-react/issues/3565)

## 0.57.3 (2020-05-05)

### Bug Fixes

- **unmount:** add destroyed flag, prevent apply change when component… ([#3553](https://github.com/solidoc/iffe-react/issues/3553)) ([cc57894](https://github.com/solidoc/iffe-react/commit/cc57894f9813b5c2a44499a128d850431bd9ae98))

### Reverts

- Revert "TypeScript Improvement: Use `[key: string]: unknown`, not `[key: string]: any` (#3565)" ([81d2f9b](https://github.com/solidoc/iffe-react/commit/81d2f9bb8f6a78590d7868deb289ec36fb208629)), closes [#3565](https://github.com/solidoc/iffe-react/issues/3565)

## 0.57.2 (2020-04-24)

### Bug Fixes

- check isContentEditable of target element in ReactEditor.hasDOMNode ([#3389](https://github.com/solidoc/iffe-react/issues/3389)) ([d8cc9fc](https://github.com/solidoc/iffe-react/commit/d8cc9fc46b6f247093c66d55652aced0b885348a))

### Reverts

- Revert "v0.57.2" ([23141c0](https://github.com/solidoc/iffe-react/commit/23141c046bf7cd00e71a186f8d63e7c2ad9f1f6e))

## 0.57.1 (2019-12-20)

### Bug Fixes

- Slate editor props ([#3359](https://github.com/solidoc/iffe-react/issues/3359)) ([101661e](https://github.com/solidoc/iffe-react/commit/101661ee27b53a228407173b0f8fdfd1a5f901d4))
- undoing and redoing are switched ([#3363](https://github.com/solidoc/iffe-react/issues/3363)) ([e54b07e](https://github.com/solidoc/iffe-react/commit/e54b07eba8ab23a8c26b275f77e8ec207f8c9b55))

# 0.57.0 (2019-12-18)

## 0.56.1 (2019-12-18)

# 0.56.0 (2019-12-18)

## 0.55.3 (2019-12-16)

## 0.55.2 (2019-12-16)

### Bug Fixes

- **content:** attach the right `onNativeSelectionChange`. ([#2150](https://github.com/solidoc/iffe-react/issues/2150)) ([3db7177](https://github.com/solidoc/iffe-react/commit/3db717761e8c4e553c2c259dcff415e8f79ebe4d))
- **content:** use handlers that actually exist in event listeners ([#2131](https://github.com/solidoc/iffe-react/issues/2131)) ([9d0546f](https://github.com/solidoc/iffe-react/commit/9d0546fad3a69e1c7aff318f69fa39c2e7a75149)), closes [#2125](https://github.com/solidoc/iffe-react/issues/2125) [#2129](https://github.com/solidoc/iffe-react/issues/2129)
- **DragAndDrop:** isDraggingInternally should not be reset by the onDragOver handler ([#1929](https://github.com/solidoc/iffe-react/issues/1929)) ([d8d0b5f](https://github.com/solidoc/iffe-react/commit/d8d0b5ff3c4f858b40bd5d4b259a684a01a55187)), closes [#1871](https://github.com/solidoc/iffe-react/issues/1871)
- **firefox:** fixed the bug that happens when changing the focus from one field to another ([#2236](https://github.com/solidoc/iffe-react/issues/2236)) ([6aba426](https://github.com/solidoc/iffe-react/commit/6aba4260f84a4ffe6ccbe60078c95f7c39a8a6c0)), closes [#2229](https://github.com/solidoc/iffe-react/issues/2229)
- **Safari:** Set a text value in dataTransfer to have the cursor on Safari when dragging a text node ([#1927](https://github.com/solidoc/iffe-react/issues/1927)) ([ec51444](https://github.com/solidoc/iffe-react/commit/ec51444df18958131696325d1454c15767c209b1))
- **scroll-to-selection:** use getClientRects when selectionRect.top/height is still 0 in Safari ([#1446](https://github.com/solidoc/iffe-react/issues/1446)) ([c58e533](https://github.com/solidoc/iffe-react/commit/c58e53364f6f30d68d26022a3a68b88b75d9463e))
- account for container padding in scrollToSelection ([#1462](https://github.com/solidoc/iffe-react/issues/1462)) ([a3d91b6](https://github.com/solidoc/iffe-react/commit/a3d91b6daae95642f19fd2b2fd7e3308c88113ac))
- add missing hotkey for delete line backward, close: [#1617](https://github.com/solidoc/iffe-react/issues/1617) ([#1735](https://github.com/solidoc/iffe-react/issues/1735)) ([950c5a9](https://github.com/solidoc/iffe-react/commit/950c5a92e1e3b19318b457eff3151d8bf39b87de))
- add missing hotkey for delete word backward, close: [#1709](https://github.com/solidoc/iffe-react/issues/1709) ([#1729](https://github.com/solidoc/iffe-react/issues/1729)) ([15f96fc](https://github.com/solidoc/iffe-react/commit/15f96fcfceecfcbbde4c7667f881d3efa46bb95f))
- Editor[autoFocus] should work, close: [#1669](https://github.com/solidoc/iffe-react/issues/1669) ([#1733](https://github.com/solidoc/iffe-react/issues/1733)) ([a325696](https://github.com/solidoc/iffe-react/commit/a3256963396364986ec91e9d0b4fe5b6a5497c4c))
- ensure that offset is positive in findDomRange ([#1719](https://github.com/solidoc/iffe-react/issues/1719)) ([804ea5d](https://github.com/solidoc/iffe-react/commit/804ea5d4d00312e5021c90ceaa81d6ac3f529027))
- make onDOMBeforeInput optional ([#3138](https://github.com/solidoc/iffe-react/issues/3138)) ([f8c8ae8](https://github.com/solidoc/iffe-react/commit/f8c8ae85964e76869e1ebafa3947953f154f1542))
- make void node selectable for edge case, close: [#1639](https://github.com/solidoc/iffe-react/issues/1639) ([#1734](https://github.com/solidoc/iffe-react/issues/1734)) ([fb172de](https://github.com/solidoc/iffe-react/commit/fb172dec6fdbb9b38037fb8e11814b6385588513))
- prevent IE11 from throwing if selection contains tables ([#1825](https://github.com/solidoc/iffe-react/issues/1825)) ([f37c3a4](https://github.com/solidoc/iffe-react/commit/f37c3a4776bbb49c3b5c123b3ea392431ea9c21f))
- ts ([#3217](https://github.com/solidoc/iffe-react/issues/3217)) ([2240ce2](https://github.com/solidoc/iffe-react/commit/2240ce227420f6d10888654d633861efa99be2e0))
- ts error ([#3179](https://github.com/solidoc/iffe-react/issues/3179)) ([b4c15e1](https://github.com/solidoc/iffe-react/commit/b4c15e13c10710ec1f55e2d2c6e66076adb2b8df))
- **updateSelection:** make sure there is a node to extend from ([#1603](https://github.com/solidoc/iffe-react/issues/1603)) ([329787a](https://github.com/solidoc/iffe-react/commit/329787a07a9fcd8b94f0015ba5ecb0bca3103d88))
- ts error ([#3180](https://github.com/solidoc/iffe-react/issues/3180)) ([d996295](https://github.com/solidoc/iffe-react/commit/d99629517dfb681f49c348100c37311131777677))
- Unknown event handler property `onEvent` ([#2925](https://github.com/solidoc/iffe-react/issues/2925)) ([5686c3d](https://github.com/solidoc/iffe-react/commit/5686c3d8cc9b623807ec740d2d996f6b11d18054))
- use text utils to move forward and backward by word ([#2169](https://github.com/solidoc/iffe-react/issues/2169)) ([805c329](https://github.com/solidoc/iffe-react/commit/805c329e5d9af21fb6286e7811c2689872e3a7f2))

### Reverts

- Revert "Add noop plugin (#2814)" (#2817) ([1639e8d](https://github.com/solidoc/iffe-react/commit/1639e8da49693775b5895392985b554027b055b2)), closes [#2814](https://github.com/solidoc/iffe-react/issues/2814) [#2817](https://github.com/solidoc/iffe-react/issues/2817)
- Revert "Debug mutations (#2815)" (#2816) ([0837db7](https://github.com/solidoc/iffe-react/commit/0837db7ce093d0f27404d1fb183d628f5188a1e4)), closes [#2815](https://github.com/solidoc/iffe-react/issues/2815) [#2816](https://github.com/solidoc/iffe-react/issues/2816)
- Revert "Android 8.0, 8.1 and 9.0 Support (#2553)" (#2562) ([391e2cb](https://github.com/solidoc/iffe-react/commit/391e2cba67adf5a36b95079be25808d96ad03238)), closes [#2553](https://github.com/solidoc/iffe-react/issues/2553) [#2562](https://github.com/solidoc/iffe-react/issues/2562)
- Revert "Keep marks after splitting a block (#1273)" (#1289) ([6298d54](https://github.com/solidoc/iffe-react/commit/6298d5442d560600f01c5032a4825e84fb86bc9f)), closes [#1273](https://github.com/solidoc/iffe-react/issues/1273) [#1289](https://github.com/solidoc/iffe-react/issues/1289) [#1269](https://github.com/solidoc/iffe-react/issues/1269)
