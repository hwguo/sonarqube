/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { checkStatus, corsRequest, parseJSON } from '../helpers/request';

export interface Edition {
  name: string;
  desc: string;
  more_link: string;
  request_license_link: string;
  download_link: string;
}

export interface Editions {
  [key: string]: Edition;
}

export function getEditionsList(): Promise<Editions> {
  // TODO Replace with real url
  const url =
    'https://gist.githubusercontent.com/gregaubert/e34535494f8a94bec7cbc4d750ae7d06/raw/ba8670a28d4bc6fbac18f92e450ec42029cc5dcb/editions.json';
  return corsRequest(url)
    .submit()
    .then(checkStatus)
    .then(parseJSON);
}
