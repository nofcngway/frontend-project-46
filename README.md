### Hexlet tests and linter status:
[![Actions Status](https://github.com/nofcngway/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nofcngway/frontend-project-46/actions) [![CI](https://github.com/nofcngway/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/nofcngway/frontend-project-46/actions/workflows/main.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/de6dc13274657e9af9e5/maintainability)](https://codeclimate.com/github/nofcngway/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/de6dc13274657e9af9e5/test_coverage)](https://codeclimate.com/github/nofcngway/frontend-project-46/test_coverage)

# Проект "Вычислитель отличий"

# Описание проекта
"Вычислитель отличий" - это утилита командной строки, которая сравнивает два конфигурационных файла и выводит их различия в удобочитаемом формате. Поддерживает JSON и YAML.

# Инструкция по установке
1. Склонировать репозиторий: `git clone <repo>` 
2. Установить `node.js`
3. Установить зависимости: `make install`

# Использование
- `gendiff -h` - помощь.
- `gendiff -V` - версия проекта.
- `gendiff <filepath1> <filepath2> [--format <format>]` - начало работы с проектом. Можно выбрать стиль форматтера. Их всего три: `stylish`, `plain` и `json`. По дефолту выбран stylish.

# Полная демонстрация работы проекта
[![демонстрация](https://asciinema.org/a/CsC7N71vcCTGmXDlYnRkTSKnc.svg)](https://asciinema.org/a/CsC7N71vcCTGmXDlYnRkTSKnc)