<?php

namespace Portfolio;

require_once __DIR__ . '/../../../../_php/helpers/db/Db.php';

use helpers\db\Db;

class PortfolioQueries {

    public const cmd_get_projects = 'select * from projects';
    public static function get_projects() {
        return Db::rbtlong()->rows(self::cmd_get_projects);
    }

}

